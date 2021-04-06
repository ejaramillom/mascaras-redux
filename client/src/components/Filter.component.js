import React, {useState, useEffect} from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Tile from 'react-bulma-components/lib/components/tile';
import Tag from 'react-bulma-components/lib/components/tag';
import ExportCSV from './ExportCSV.component';
import {
  BottleFilter,
  BrushFilter,
  RodFilter,
  WiperFilter
} from './PartFilter.component';
import axios from "axios";
import '../App.css';
import store from '../store';

//---------------- Filter component

const Filter = () => {

//---------------- hooks

  const [bottle, setBottle] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [rod, setRod] = useState([]);
  const [rods, setRods] = useState([]);
  const [wiper, setWiper] = useState([]);
  const [wipers, setWipers] = useState([]);
  const [brush, setBrush] = useState([]);
  const [brushes, setBrushes] = useState([]);
  const [claim, setClaim] = useState("");
  const [build, setBuild] = useState([]);
  const [buildClick, setBuildClick] = useState(false);

//---------------- hooks end

//---------------- useEffect

  useEffect(() => {
    const fetchBuild = async () => {
      const {data} = await axios.get("/build")
      .catch(function (error) {
        console.log(error)
      });
      setBuild(data);
      if (data[0] && data[0].bottle) {
        setBottle(data[0].bottle);
      } else {
        setBottle([])
      }
      if (data[0] && data[0].rod) {
        setRod(data[0].rod);
      } else {
        setRod([])
      }
      if (data[0] && data[0].brush) {
        setBrush(data[0].brush);
      } else {
        setBrush([])
      }
      if (data[0] && data[0].wiper) {
        setWiper(data[0].wiper);
      } else {
        setWiper([])
      }
    }

    const fetchBottles = async () => {
      const {data} = await axios.get("/bottle")
      .catch(function (error) {
        console.log(error)
      });
      setBottles(data);
    }

    const fetchBrushes = async () => {
      const {data} = await axios.get("/brush")
      .catch(function (error) {
        console.log(error)
      });
      setBrushes(data);
    }

    const fetchRods = async () => {
      const {data} = await axios.get("/rod")
      .catch(function (error) {
        console.log(error)
      });
      setRods(data);
    }

    const fetchWipers = async () => {
      const {data} = await axios.get("/wiper")
      .catch(function (error) {
        console.log(error)
      });
      setWipers(data);
    }

    fetchBuild();
    fetchBottles();
    fetchBrushes();
    fetchRods();
    fetchWipers();

    if (!build[0]) {
      setWiper([]);
      setRod([]);
      setBrush([]);
      setBottle([]);
    }

// no borrar esta linea
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [buildClick]);

//---------------- useEffect

//---------------- middlewares that must be moved and imported

  const deleteBuild = async () => {
    await axios.post("/delete")
    .then(function (response) {
      if (response.status === 200) {
        console.log("Succesfully deleted");
        setBottle([]);
        setRod([]);
        setWiper([]);
        setBrush([]);
        alert("Build deleted!");
      } else {
        const err = new Error(response.error);
        console.log(err);
        throw err;
      }
    })
    .catch(function (error) {
      alert(error);
    });
  };

  const removeBuildClick = () => {
    deleteBuild([]);
    setBuildClick(!buildClick);
  };

//---------------- middlewares that must be moved and imported end

//---------------- render
  return (
    <div>
      <Tile kind="ancestor" className="App">
        <Tile kind="parent" className="space">
          <Tile renderAs="article" kind="child" notification className="is-white verticalPad center">
          <Button.Group size="small">
            <Button
              type="submit"
              className="is-danger is-light"
              size="small"
              onClick={() => {
                setClaim("");
              }}
            >
              No claim
            </Button>
            <Button
              type="submit"
              className="is-link is-light"
              size="small"
              onClick={() => {
                setClaim("definition");
              }}
            >
              Definition
            </Button>
            <Button
              type="submit"
              className="is-link is-light"
              size="small"
              onClick={() => {
                setClaim("volumizing");
              }}
            >
              Volumizing
            </Button>
            <Button
              type="submit"
              className="is-link is-light"
              size="small"
              onClick={() => {
                setClaim("lengthening");
              }}
            >
              Lengthening
            </Button>
            <Button
              type="submit"
              className="is-link is-light"
              size="small"
              onClick={() => {
                setClaim("plumping");
              }}
            >
              Plumping
            </Button>
            <Button
              type="submit"
              className="is-link is-light"
              size="small"
              onClick={() => {
                setClaim("curling");
              }}
            >
              Curling
            </Button>
          </Button.Group>
            {claim ?
              <div>
                <Tag color="dark"> { claim } </Tag>
              </div>
              : "" }
          </Tile>
          <Tile renderAs="article" kind="child" notification className="is-white">
            <ExportCSV csvData={build} fileName="build"/>
            <Button
              type="submit"
              className="is-danger is-light"
              size="small"
              onClick={() => {
                removeBuildClick();
              }}
            >
              Delete build!
            </Button>
            <br/>
            <br/>
            <Tag.Group className="center">
              <Tag color="dark"> Bottle </Tag>
              <Tag color="light"> {bottle.name}</Tag>
              <Tag color="dark"> Brush </Tag>
              <Tag color="light"> {brush.brush}</Tag>
              <Tag color="dark"> Rod </Tag>
              <Tag color="light"> {rod.name}</Tag>
              <Tag color="dark"> Wiper </Tag>
              <Tag color="light"> {wiper.name}</Tag>
            </Tag.Group>
          </Tile>
        </Tile>
      </Tile>

      <Tile kind="ancestor">
        <Tile kind="parent" className="App">
          <Tile renderAs="article" kind="child" notification color="white">
            <BottleFilter rod={rod} brush={brush} bottle={bottle} bottles={bottles} setBuildClick={setBuildClick} buildClick={buildClick}></BottleFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <BrushFilter rod={rod} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} brushes={brushes} claim={claim}></BrushFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <RodFilter rod={rod} rods={rods} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush}></RodFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <WiperFilter rod={rod} rods={rods} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} wiper={wiper} wipers={wipers}></WiperFilter>
          </Tile>
          {/* <Tile renderAs="article" kind="child" notification>
            <WiperFilter></WiperFilter>
          </Tile> */}
        </Tile>
      </Tile>

      {/* verifying assembly tiles*/}

      {/* Delete and reset*/}
    </div>
  );
}

//--------------- render

export default Filter;

//---------------- Filter component
