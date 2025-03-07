import { useState, useCallback } from "react";
import { ReactFlow, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const SEPARATE_X = 250;
const SEPARATE_Y = 150;
const SEPARATE_Y_BAGS = 50;
const NUM_START_BAGS = 10000;

const initialNodes = [];
var initialEdges = [];
const nodeTypes = { bag: 0 };

const data = require("./dataCorr.json");
const dataCorrJson = data.gral;
const dataBags = data.bags;

dataCorrJson.forEach((mat) => {
  if (mat.pos != null) {
    initialNodes.push({
      id: mat.cod,
      data: { label: mat.name + " (" + mat.cod + ")" },
      position: {
        x: mat.pos.x * SEPARATE_X,
        y: mat.pos.y * SEPARATE_Y,
      },
    });
    mat.next.forEach((matNextCod) => {
      let id = "e" + mat.cod + "-" + matNextCod;
      let type = data.curved_edges.indexOf(id) == -1 ? "step" : "sine";
      initialEdges.push({
        id: id,
        source: mat.cod,
        target: String(matNextCod),
        type: type,
      });
    });
  }
});

let NBagsGral = 0;
dataBags.forEach((bag) => {
  NBagsGral++;
  let localBags = 0;
  let main_mat_data = dataCorrJson.find((elem) => elem.cod == bag.main_mat);
  bag.mats_in_bag.forEach((codMat) => {
    let mat_in_bag_data = dataCorrJson.find((elem) => elem.cod == codMat);

    let newNode = {
      id: String(NUM_START_BAGS + NBagsGral),
      data: {
        label:
          "También " + mat_in_bag_data.name + " (" + mat_in_bag_data.cod + ")",
      },
      position: {
        x: main_mat_data.pos.x * SEPARATE_X,
        y: main_mat_data.pos.y * SEPARATE_Y - SEPARATE_Y_BAGS,
      },
      type: "bag",
    };

    initialNodes.unshift(newNode); // insert node at the beggining

    initialEdges = initialEdges.filter(
      (elem) => elem.id != "e" + mat_in_bag_data.cod + "-" + main_mat_data.cod
    ); // delete edge

    let newEdge = {
      id: String(NUM_START_BAGS * 10 - NBagsGral), // BE CAREFUL
      source: String(NUM_START_BAGS + NBagsGral),
      target: main_mat_data.cod,
      type: "sine",
    };
    initialEdges.push(newEdge);

    //console.log(initialEdges);
    //console.log(initialNodes.find((elem) => elem.id > NUM_START_BAGS));
  });

  // initialNodes.push({
  //   id: NBagsGral,
  //   data: { label: bag.name + " (" + bag.cod + ")" },
  //   position: {
  //     x: dataCorrJson.find((elem) => elem.cod == bag.main_mat).pos.x * 200,
  //     y: bag.pos.y * 120,
  //   },
  // });
});

/*
TODO:
* Mochilas
  * Darles estilo para que parezcan mochilas
*/

function CorrReactFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      colorMode="dark"
      fitView
    />
  );
}

export default CorrReactFlow;

/*
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
*/
