import "bootstrap/dist/css/bootstrap.min.css";
import BaseModal from "../../BaseModal";
import "./CalculadoraDificultades.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";
// import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js";

const data = require("./dificultades.json").data;
const findMat = (cod) => data.find((elem) => elem.cod == cod);
const getMatDif = (cod) => parseFloat(findMat(cod).dif.replace(",", "."));

const ranges = [
  { maxNum: 0, name: "Sin datos" },
  { maxNum: 1.5, name: "Fácil" },
  { maxNum: 2.5, name: "Medio-Fácil" },
  { maxNum: 3.5, name: "Media" },
  { maxNum: 4.5, name: "Medio-Dificil" },
  { maxNum: 5.1, name: "Dificil" },
];

const modValues = {
  Cuatrimestre: 1,
  Verano: 3,
  Libre: 2,
  Final: 1,
};

const cuatDifs = [
  [5, "Fácil"],
  [9, "Medio-Fácil"],
  [15, "Media"],
  [20, "Medio-Dificil"],
  [27, "Dificil"],
];

const cuatDifCalc = (x) => {
  for (let i = 0; i < cuatDifs.length; i++) {
    if (cuatDifs[i][0] > x) {
      return cuatDifs[i][1];
    }
  }
  return "Extremo";
};

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    fontWeight: "normal",
    color: "black",
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "500" : "normal",
    color: state.isSelected ? "white" : "black",
  }),
};

function Table() {
  const [rowsData, setRowsData] = useState(
    Array(9).fill({ matSelected: "", modSelected: "" })
  ); // TODO Mejorar

  const setcodMatSelected = (idx, val) => {
    let newData = [...rowsData];
    newData[idx] = { ...newData[idx], matSelected: val };
    setRowsData(newData);
  };
  const setModSelected = (idx, val) => {
    let newData = [...rowsData];
    newData[idx] = { ...newData[idx], modSelected: val };
    setRowsData(newData);
  };

  function SubjectSelect({ setMat, idx }) {
    // Adding all the subjects to the select
    const opts = [];
    data.forEach((mat) => {
      opts.push({ value: mat.cod, label: mat.cod + " - " + mat.name });
    });

    let prevValue;
    rowsData[idx].matSelected != ""
      ? (prevValue = findMat(rowsData[idx].matSelected).name)
      : (prevValue = "Elegir materia...");

    // The component
    return (
      <div styles={{ width: "100%" }}>
        <Select
          options={opts}
          styles={selectStyles}
          onChange={(op) => {
            setMat(op.value);
          }}
          placeholder={prevValue}
        />
      </div>
    );
  }

  function ModalidadSelect({ setMod, idx }) {
    const modOpts = [
      { value: "Cuatrimestre", label: "Cuatrimestre" },
      { value: "Verano", label: "Verano" },
      { value: "Libre", label: "Libre" },
      { value: "Final", label: "Final" },
    ];
    let prevValue;
    rowsData[idx].modSelected != ""
      ? (prevValue = rowsData[idx].modSelected)
      : (prevValue = "Elegir...");

    return (
      <Select
        options={modOpts}
        styles={selectStyles}
        onChange={(op) => {
          setMod(idx, op.value);
        }}
        placeholder={prevValue}
      />
    );
  }

  function Difficulty({ codMatSelected }) {
    let nameDifficulty = "-";
    if (codMatSelected != "") {
      let i = 0;
      while (getMatDif(codMatSelected) > ranges[i].maxNum) {
        i++;
      }
      nameDifficulty = ranges[i].name;
    }

    return (
      <td className="difficulty" style={{ textAlign: "center" }}>
        {nameDifficulty}
        {codMatSelected != "" ? (
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.8rem",
              color: "grey",
              marginLeft: "0.2rem",
            }}
          >
            (
            {!isNaN(getMatDif(codMatSelected)) ? (
              getMatDif(codMatSelected)
            ) : (
              <>?</>
            )}
            )
          </span>
        ) : (
          ""
        )}
      </td>
    );
  }

  function NormalRow({ index }) {
    var codMatSelected = rowsData[index].matSelected;
    var modSelected = rowsData[index].modSelected;

    // const [codMatSelected, setcodMatSelected] = useState("");
    // const [modSelected, setModSelected] = useState("");
    return (
      <tr>
        <td scope="row" style={{ width: "30rem" }}>
          <SubjectSelect
            setMat={(x) => {
              setcodMatSelected(index, x);
            }}
            idx={index}
          />
        </td>
        <td style={{ width: "15rem" }}>
          <ModalidadSelect idx={index} setMod={setModSelected} />
        </td>
        <Difficulty codMatSelected={codMatSelected} />
        {/* TODO here too, idx no specified*/}
        <td style={{ textAlign: "center" }}>
          {modSelected == "" || codMatSelected == "" ? (
            <span>Completar campos</span>
          ) : !isNaN(getMatDif(codMatSelected)) ? (
            showPts(index)
          ) : (
            "Sin datos"
          )}
        </td>
      </tr>
    );
  }

  function showPts(idx) {
    if (isNaN(getMatDif(rowsData[idx].matSelected))) {
      return 0;
    }
    return (
      Math.round(
        getMatDif(rowsData[idx].matSelected) *
          modValues[rowsData[idx].modSelected] *
          100
      ) / 100
    );
  }

  function TotalRow() {
    let totalPts = 0;
    for (let i = 0; i < rowsData.length; i++) {
      if (rowsData[i].matSelected != 0 && rowsData[i].modSelected != "") {
        let pts =
          getMatDif(rowsData[i].matSelected) *
          modValues[rowsData[i].modSelected];
        totalPts += pts;
      }
    }

    return (
      <>
        <tr>
          <th colSpan="3" style={{ textAlign: "right" }}>
            PUNTAJE CUATRIMESTRE
          </th>
          <th>{Math.round(totalPts * 100) / 100}</th>
        </tr>
        <tr>
          <th colSpan="3" style={{ textAlign: "right" }}>
            DIFICULTAD CUATRIMESTRE
          </th>
          <th>{cuatDifCalc(totalPts)}</th>
        </tr>
      </>
    );
  }

  // TODO: Que pasa cuando #DIV/0
  // TODO: Que haga la suma para el total sin resetear todo lo otro

  return (
    <table
      className="table table-dark"
      style={{ width: "70%", margin: "auto" }}
    >
      <thead>
        <tr>
          <th scope="col">Cod. / Materia</th>
          <th scope="col">Modalidad</th>
          <th scope="col">Dificultad</th>
          <th scope="col">Puntaje</th>
        </tr>
      </thead>
      <tbody id="subjectsSelectionContainer">
        <NormalRow index={0} />
        <NormalRow index={1} />
        <NormalRow index={2} />
        <NormalRow index={3} />
        <NormalRow index={4} />
        <NormalRow index={5} />
        <NormalRow index={6} />
        <NormalRow index={7} />
        <NormalRow index={8} />
        <TotalRow />
      </tbody>
    </table>
  );
}

function ExplanationTable({ title, data, note }) {
  let comment = "";
  if (note != undefined) {
    comment = note;
  }

  return (
    <table
      className="table table-dark"
      style={{ width: "70%", margin: "auto" }}
    >
      <thead>
        <tr>
          <th scope="col" colSpan={String(data[0].length)}>
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => (
          <tr>
            {elem.map((e) => (
              <td>{e}</td>
            ))}
          </tr>
        ))}
        {comment != "" ? (
          <tr>
            <td colSpan={String(data[0].length)}>{comment}</td>
          </tr>
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}

/*
function CalculadoraDificultades(props) {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Generar 4000 opciones al cargar el componente
    const generatedOptions = Array.from(
      { length: 4000 },
      (_, i) => `Option ${i}`
    );
    setOptions(generatedOptions);
    setFilteredOptions(generatedOptions);
  }, []);

  useEffect(() => {
    // Filtrar opciones basadas en el término de búsqueda
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <BaseModal modalType="ComingSoon"></BaseModal>
      <section id="mainSection">
        <h1>Calculadora de Dificultades</h1>
        <Table></Table>
        <div>
          <div className="p-4 space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar opción..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full border rounded p-2 mb-2"
            />

            <select
              className="w-full border rounded p-2"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))
              ) : (
                <option disabled>No se encontraron opciones</option>
              )}
            </select>

            {selectedOption && (
              <div className="mt-4 text-center text-lg font-semibold">
                Seleccionaste: {selectedOption}
              </div>
            )}
          </div>
        </div>
      </section>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.16/dist/js/bootstrap-select.min.js"></script>
    </div>
  );
}
*/

function CalculadoraDificultades(props) {
  let expl1 = [
    ["Cursada", "Puntos"],
    ["Cuatrimestre", 1],
    ["Final", 1],
    ["Libre", 2],
    ["Verano", 3],
  ];

  let expl2 = [
    ["Dificultad", "Puntos"],
    ["Fácil", 1],
    ["Medio-Fácil", 2],
    ["Media", 3],
    ["Medio-Dificil", 4],
    ["Dificil", 5],
  ];

  let expl3 = [
    ["Valor Máximo", "Dificultad"],
    [5, "Fácil"],
    [9, "Medio-Fácil"],
    [15, "Media"],
    [20, "Medio-Dificil"],
    [27, "Dificil"],
    [">27", "Extremo"],
  ];

  return (
    <div class="secContainer">
      <section id="mainSection">
        <h1>Calculadora de Dificultades (Sistema Pujía)</h1>
        <Table></Table>
        <h2 id="someExpl">
          Puntaje Materia = Puntaje Cursada * Puntaje Dificultad
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <ExplanationTable
              title="Puntos por Modalidad de Cursada"
              data={expl1}
            />
          </div>
          <div style={{ width: "200%" }}>
            <ExplanationTable
              title="Puntos por dificultad"
              data={expl2}
              note={
                <p>
                  En esta calculadora se toma el valor exacto de dificultad (en
                  vez de un valor entero, uno decimal). El valor se saca del{" "}
                  <a href="/dificultad-materias" target="blank">
                    excel de dificultades
                  </a>{" "}
                  donde se opinan las dificultades de las materias
                </p>
              }
            />
          </div>
          <div style={{ width: "100%" }}>
            <ExplanationTable title="Puntaje Cuatrimestre" data={expl3} />
          </div>
        </div>
      </section>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.16/dist/js/bootstrap-select.min.js"></script>
    </div>
  );
}

export default CalculadoraDificultades;
