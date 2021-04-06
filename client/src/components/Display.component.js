import React from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Tag from 'react-bulma-components/lib/components/tag';
import ExportCSV from './ExportCSV.component';
import '../App.css';

//---------------- Bottle filter
export const BottleDisplay = (props) => {
  return (
    <div>
      <ExportCSV csvData={props.bottlesToDisplay} fileName="bottles" />
      <br />
      <br />
      {props.bottlesToDisplay.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6">{element.name}
                <br/>
                <br/>
                <Tag color="dark" className="App"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Thread </Tag>
                <Tag color="info"> {element.thread}</Tag>
              <br/>
                <Tag color="dark"> Depth </Tag>
                <Tag color="info"> {element.depth}</Tag>
              <br/>
              <br/>
              <Button
                type="submit"
                color="info"
                onClick={() => {
                  props.addBottleClick(element);
                }}
                size="small"
              >
                Add Bottle
              </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
}
//---------------- Bottle filter

//---------------- Brush filter
export const BrushDisplay = (props) => {
  return (
    <div>
    <ExportCSV csvData={props.brushesToDisplay} fileName="brushes" />
    <br />
    <br />
      {props.brushesToDisplay.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.brush}
                <br/>
                <br/>
                <Image rounded="true" key={element.brush} size="2by1" className="center" src={require(`../images/${element.brush}.jpg`)} alt="" />
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Type </Tag>
                <Tag color="info"> {element.type}</Tag>
                <br/>
                <Tag color="dark"> Length </Tag>
                <Tag color="info"> {element.brushLength}</Tag>
                <br/>
                <Tag color="dark"> Shaft </Tag>
                <Tag color="info"> {element.shaftDiameter}</Tag>
                <br/>
                <Tag color="dark"> Brush </Tag>
                <Tag color="info"> {element.brushDiameter}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    props.addBrushClick(element);
                  }}
                >
                  Add Brush
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
}
//---------------- Brush filter

//---------------- Rod filter
export const RodDisplay = (props) => {
  return (
    <div>
    <ExportCSV csvData={props.rodsToDisplay} fileName="rods" />
    <br />
    <br />
      {props.rodsToDisplay.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.name}
                <br/>
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Thread </Tag>
                <Tag color="info"> {element.thread}</Tag>
                <br/>
                <Tag color="dark"> Length </Tag>
                <Tag color="info"> {element.dimensions.length}</Tag>
                <br/>
                <Tag color="dark"> Shaft </Tag>
                <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                <br/>
                <Tag color="dark"> Rod </Tag>
                <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    props.addRodClick(element);
                  }}
                >
                  Add Rod
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
}
//---------------- Rod filter

//---------------- Wiper filter
export const WiperDisplay = (props) => {
  return (
    <div>
    <ExportCSV csvData={props.wipersToDisplay} fileName="wipers" />
    <br />
    <br />
      {props.wipersToDisplay.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
            <Heading size={7} renderAs="h6" >{element.name}
              <br/>
              <br/>
              <Tag color="dark"> Drawing </Tag>
              <Tag color="info"> {element.drawing}</Tag>
              <br/>
              <br/>
              <Button
                type="submit"
                color="info"
                size="small"
                onClick={() => {
                  props.addWiperClick(element);
                }}
              >
                Add Wiper
              </Button>
            </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
}
//---------------- Wiper filter
