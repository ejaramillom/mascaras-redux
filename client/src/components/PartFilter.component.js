import React, {useState} from 'react';
import {
  BottleDisplay,
  BrushDisplay,
  RodDisplay,
  WiperDisplay,
} from './Display.component';
import {
  FilterButton,
} from './FilterButton.component';
import axios from "axios";
import '../App.css';

//---------------- Bottle filter

export const BottleFilter = (props) => {
  const bottle = props.bottle;
  const bottles = props.bottles;
  const rod = props.rod;
  const brush = props.brush;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const [search, setSearch] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([bottles]);

  const addBottle = async (data) => {
    await axios.post("/bottle", {
      name: data.name,
      drawing: data.drawing,
      mold: data.mold,
      depth: data.depth,
      thread: data.thread
    })
    .then(function (response) {
      if (response.status === 200) {
        alert("Bottle added to the list!");
        console.log("Succesfully added");
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

  const addBottleClick = (element) => {
    addBottle(element);
    setBuildClick(!buildClick);
  };

  const onChange = (e) => {
    setSearch(e);
    let oldList = bottles;
    if(search !== "") {
      let newList =[];
      newList = oldList.filter( element => {
        return element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilterDisplay(newList)
    } else {
      setFilterDisplay(oldList)
    }
  }

  if (bottle && bottle.name){
    const filteredBottles = bottles.filter( element => {
      return element.name.toLowerCase().indexOf(bottle.name.toLowerCase()) !== -1;
    });

    return (
      <BottleDisplay bottlesToDisplay={filteredBottles} addBottleClick={addBottleClick} ></BottleDisplay>
    );
  } else if (rod && rod.thread && brush && brush.brushLength){
    const filteredBottles = bottles.filter( element => {
      let gap = (Number(element.depth) - (Number(rod.dimensions.length) + Number(brush.brushLength)) );
      if (gap > 2 && gap < 6 && (element.thread.toLowerCase().indexOf(rod.thread.toLowerCase()) !== -1) ){
        return element;
      } else {
        return "";
      }
    });

    return (
      <BottleDisplay bottlesToDisplay={filteredBottles} addBottleClick={addBottleClick} ></BottleDisplay>
    );

  } else if (rod && rod.thread){
    const filteredBottles = bottles.filter( element => {
      return element.thread.toLowerCase().indexOf(rod.thread.toLowerCase()) !== -1;
    });

    return (
      <BottleDisplay bottlesToDisplay={filteredBottles} addBottleClick={addBottleClick} ></BottleDisplay>
    );
  }

  return (
    <div>
      <FilterButton value={search} onChange={e => onChange(e.target.value)} ></FilterButton>
      <br />
      <BottleDisplay bottlesToDisplay={search.length < 1 ? bottles : filterDisplay} addBottleClick={addBottleClick} ></BottleDisplay>
    </div>
  );
};

//---------------- Bottle filter

//---------------- Brush filter

export const BrushFilter = (props) => {
  const brush = props.brush;
  const brushes = props.brushes;
  const claim = props.claim;
  const rod = props.rod;
  const bottle = props.bottle;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const [search, setSearch] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([brushes]);

  const addBrush = async (data) => {
    await axios.post("/brush", {
        brush: data.brush,
        original: data.original,
        shaftLength: data.shaftLength,
        shaftDiameter: data.shaftDiameter,
        brushLength: data.brushLength,
        brushDiameter: data.brushDiameter,
        type: data.type
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Brush added to the list!");
          console.log("Succesfully added");
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

  const onChange = (e) => {
    setSearch(e);
    let oldList = brushes;
    if(search !== "") {
      let newList =[];
      newList = oldList.filter( element => {
        return element.brush.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilterDisplay(newList)
    } else {
      setFilterDisplay(brushes)
    }
  }

  const addBrushClick = (element) => {
    addBrush(element);
    setBuildClick(!buildClick);
  };

   if (brush && brush.brush){
    const filteredBrushes = brushes.filter( element => {
      return element.brush.toLowerCase().indexOf(brush.brush.toLowerCase()) !== -1;
    });

    return (
      <BrushDisplay brushesToDisplay={filteredBrushes} addBrushClick={addBrushClick} ></BrushDisplay>
    );

  } else if (claim){
    const filteredBrushes = brushes.filter( element => {
      if (claim === "definition" && element.claim.definition === true) {
        return element;
      } else if (claim === "volumizing" && element.claim.volumizing === true)  {
        return element;
      } else if (claim === "lengthening" && element.claim.lengthening === true) {
        return element;
      } else if (claim === "curling" && element.claim.curling === true) {
        return element;
      } else if (claim === "plumping" && element.claim.plumping === true) {
        return element;
      } else {
        return "";
      }
    });

    return (
      <BrushDisplay brushesToDisplay={filteredBrushes} addBrushClick={addBrushClick} ></BrushDisplay>
    );

  } else if (rod && rod.name && bottle && bottle.name){
    const filteredBrushes = brushes.filter( element => {
      let mascaraGap =  (Number(bottle.depth) - (Number(element.brushLength) + Number(rod.dimensions.length)));
      if (mascaraGap > 1 && mascaraGap < 6) {
        return element;
      } else {
        return null ;
      }
    });

    return (
      <BrushDisplay brushesToDisplay={filteredBrushes} addBrushClick={addBrushClick} ></BrushDisplay>
    );

  }

  return (
    <div>
      <FilterButton value={search} onChange={e => onChange(e.target.value)} ></FilterButton>
      <br />
      <BrushDisplay brushesToDisplay={search.length < 1 ? brushes : filterDisplay} addBrushClick={addBrushClick} ></BrushDisplay>
    </div>
  );
};

//---------------- Brush filter

//---------------- Rod filter

export const RodFilter = (props) => {
  const rod = props.rod;
  const rods = props.rods;
  const bottle = props.bottle;
  const brush = props.brush;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const [search, setSearch] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([rods]);

  const addRod = async (data) => {
    await axios.post("/rod", {
        name: data.name,
        drawing: data.drawing,
        thread: data.thread,
        dimensions: {
          length: data.dimensions.length,
          rodDiameter: data.dimensions.rodDiameter,
          brushDiameter: data.dimensions.brushDiameter,
        }
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Rod added to the list!");
          console.log("Succesfully added");
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

  const addRodClick = (element) => {
    addRod(element);
    setBuildClick(!buildClick);
  };

  const onChange = (e) => {
    setSearch(e);
    let oldList = rods;
    if(search !== "") {
      let newList =[];
      newList = oldList.filter( element => {
        return element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilterDisplay(newList)
    } else {
      setFilterDisplay(oldList)
    }
  }

  if (rod && rod.name){
    const filteredRods = rods.filter( element => {
      return element.name.toLowerCase().indexOf(rod.name.toLowerCase()) !== -1;
    });

    return (
      <RodDisplay rodsToDisplay={filteredRods} addRodClick={addRodClick} ></RodDisplay>
    );

  } else if (bottle && bottle.thread && bottle.depth){
    const filteredRods = rods.filter( element => {
      let depthDiff = (Number(bottle.depth) - Number(element.dimensions.length));
      if (element.thread && (depthDiff > 0)) {
        return element.thread.toLowerCase().indexOf(bottle.thread.toLowerCase()) !== -1;
      } else {
        return "";
      }
    });

    return (
      <RodDisplay rodsToDisplay={filteredRods} addRodClick={addRodClick} ></RodDisplay>
    );

  } else if (bottle && bottle.thread){
    const filteredRods = rods.filter( element => {
      if (element.thread) {
        return element.thread.toLowerCase().indexOf(bottle.thread.toLowerCase()) !== -1;
      } else {
        return "";
      }
    });

    return (
      <RodDisplay rodsToDisplay={filteredRods} addRodClick={addRodClick} ></RodDisplay>
    );

  } else if (brush && brush.type){
    const filteredRods = rods.filter( element => {
      let brushRodDiff =  Number(element.dimensions.brushDiameter) - Number(brush.shaftDiameter);
      let wipeDelta =  Number(brush.brushDiameter) - Number(element.dimensions.rodDiameter) ;
      if (brush.type === "INYECTADO" && wipeDelta > 0.5 && wipeDelta < 4.8) {
        if (brushRodDiff > 0.05 && brushRodDiff < 0.15){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "NYLON" && wipeDelta > 0.8 && wipeDelta < 6.4) {
        if (brushRodDiff > -0.05 && brushRodDiff < 0.1){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "LIP GLOSS" && wipeDelta > -2 && wipeDelta < 3) {
        if (brushRodDiff > 0 && brushRodDiff < 0.2){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "DELINEADOR" && wipeDelta > -2 && wipeDelta < -1) {
        if (brushRodDiff > -0.05 && brushRodDiff < 0.1){
          return element;
        } else {
          return "";
        }
      }
    });

    return (
      <RodDisplay rodsToDisplay={filteredRods} addRodClick={addRodClick} ></RodDisplay>
    );
  }

  return (
    <div>
      <FilterButton value={search} onChange={e => onChange(e.target.value)} ></FilterButton>
      <br />
      <RodDisplay rodsToDisplay={search.length < 1 ? rods : filterDisplay} addRodClick={addRodClick} ></RodDisplay>
    </div>
  );
};

//---------------- Rod filter

//---------------- Wiper filter

export const WiperFilter = (props) => {
  const wiper = props.wiper;
  const wipers = props.wipers;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const [search, setSearch] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([wipers]);

  const addWiper = async (data) => {
    await axios.post("/wiper", {
        name: data.name,
        drawing: data.drawing,
        mold: data.mold,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Wiper added to the list!");
          console.log("Wiper succesfully added");
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

  const addWiperClick = (element) => {
    addWiper(element);
    setBuildClick(!buildClick);
  };

  const onChange = (e) => {
    setSearch(e);
    let oldList = wipers;
    if(search !== "") {
      let newList =[];
      newList = oldList.filter( element => {
        return element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilterDisplay(newList)
    } else {
      setFilterDisplay(oldList)
    }
  }

   if (wiper && wiper.name){
    const filteredWipers = wipers.filter( element => {
      return element.name.toLowerCase().indexOf(wiper.name.toLowerCase()) !== -1;
    });

    return (
      <WiperDisplay wipersToDisplay={filteredWipers} addWiperClick={addWiperClick} ></WiperDisplay>
    );
  }

  return (
    <div>
      <FilterButton value={search} onChange={e => onChange(e.target.value)} ></FilterButton>
      <br />
      <WiperDisplay wipersToDisplay={search.length < 1 ? wipers : filterDisplay} addWiperClick={addWiperClick} ></WiperDisplay>
    </div>
  );
};

//---------------- Wiper filter
