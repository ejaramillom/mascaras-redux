import React from 'react';
import '../App.css';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Level from 'react-bulma-components/lib/components/level';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';
import Tag from 'react-bulma-components/lib/components/tag';
import { getBottles, getBrushes, getRods, getWipers, getCaps } from "../middlewares/services";
import { useQuery } from "react-query";

export const Bottle = () => {
  const { isLoading, error, data } = useQuery("bottles", getBottles);
  if (isLoading) return "Loading...";
  if (error) {
    return "Oops! " + error.message;
  }

  return (
    <div className="App">
      <header className="App-header">
      <Section>
        { data.map( element =>
            <Box>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                </Media.Item>
                <Media.Item position="left">
                  <Content>
                    <p>
                      <Tag color="link"> Name </Tag>
                      <strong className="horizontalPad">{element.name}</strong>
                      <Tag color="info"> Drawing </Tag>
                      <small className="horizontalPad">{element.drawing}</small>
                      <Tag color="info"> Mold </Tag>
                      <small className="horizontalPad">{element.mold}</small>
                      <Tag color="info"> Depth </Tag>
                      <small className="horizontalPad">{element.depth}</small>
                      <Tag color="info"> Thread </Tag>
                      <small className="horizontalPad">{element.thread}</small>
                      <br />
                    </p>
                  </Content>
                  <Level breakpoint="mobile">
                    <Level.Side align="left">
                      <Button link size="small">Add</Button>
                      <Button link size="small">Download</Button>
                    </Level.Side>
                  </Level>
                </Media.Item>
              </Media>
            </Box>
          )}
        </Section>
      </header>
    </div>
  );
}

export const Brush = () => {
  const { isLoading, error, data } = useQuery("brushes", getBrushes);
  if (isLoading) return "Loading...";
  if (error) {
    return "Oops! " + error.message;
  }

  return (
    <div className="App">
      <header className="App-header">
      <Section>
        { data.map( element =>
            <Box>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                </Media.Item>
                <Media.Item position="left">
                  <Content>
                    <p>
                      <Tag color="link"> Name </Tag>
                      <strong className="horizontalPad">{element.brush}</strong>
                      <Tag color="info"> Original </Tag>
                      <small className="horizontalPad">{element.original}</small>
                      <Tag color="info"> Shaft diameter </Tag>
                      <small className="horizontalPad">{element.shaftDiameter}</small>
                      <Tag color="info"> Shaft length </Tag>
                      <small className="horizontalPad">{element.shaftLength}</small>
                      <Tag color="info"> Brush diameter </Tag>
                      <small className="horizontalPad">{element.brushDiameter}</small>
                      <Tag color="info"> Brush length </Tag>
                      <small className="horizontalPad">{element.brushLength}</small>
                      <Tag color="info"> Type </Tag>
                      <small className="horizontalPad">{element.type}</small>
                      <Tag color="info"> Claim </Tag>
                      {element.claim.definition ?
                        <small className="horizontalPad">DEFINITION</small>
                      : "" }
                      {element.claim.volumizing ?
                        <small className="horizontalPad">VOLUMIZING</small>
                      : "" }
                      {element.claim.lengthening ?
                        <small className="horizontalPad">LENGTHENING</small>
                      : "" }
                      {element.claim.curling ?
                        <small className="horizontalPad">CURLING</small>
                      : "" }
                      {element.claim.plumbing ?
                        <small className="horizontalPad">PLUMBING</small>
                      : "" }
                      <br />
                    </p>
                  </Content>
                  <Level breakpoint="mobile">
                    <Level.Side align="left">
                      <Button link size="small">Add</Button>
                      <Button link size="small">Download</Button>
                    </Level.Side>
                  </Level>
                </Media.Item>
              </Media>
            </Box>
          )}
        </Section>
      </header>
    </div>
  );
}

export const Rod = () => {
  const { isLoading, error, data } = useQuery("rods", getRods);
  if (isLoading) return "Loading... ";
  if (error) {
    return "Oops! " + error.message;
  }

  return (
    <div className="App">
      <header className="App-header">
      <Section>
        { data.map( element =>
            <Box>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                </Media.Item>
                <Media.Item position="left">
                  <Content>
                    <p>
                      <Tag color="link"> Name </Tag>
                      <strong className="horizontalPad">{element.name}</strong>
                      <Tag color="info"> Drawing </Tag>
                      <small className="horizontalPad">{element.drawing}</small>
                      <Tag color="info"> Mold </Tag>
                      <small className="horizontalPad">{element.mold}</small>
                      <Tag color="info"> Length </Tag>
                      <small className="horizontalPad">{element.dimensions.length}</small>
                      <Tag color="info"> Thread </Tag>
                      <small className="horizontalPad">{element.thread}</small>
                      <Tag color="info"> Rod diameter </Tag>
                      <small className="horizontalPad">{element.dimensions.rodDiameter}</small>
                      <Tag color="info"> Brush diameter </Tag>
                      <small className="horizontalPad">{element.dimensions.brushDiameter}</small>
                      <br />
                    </p>
                  </Content>
                  <Level breakpoint="mobile">
                    <Level.Side align="left">
                      <Button link size="small">Add</Button>
                      <Button link size="small">Download</Button>
                    </Level.Side>
                  </Level>
                </Media.Item>
              </Media>
            </Box>
          )}
        </Section>
      </header>
    </div>
  );
}

export const Wiper = () => {
  const { isLoading, error, data } = useQuery("wipers", getWipers);
  console.log(data);
  if (isLoading) return "Loading...";
  if (error) {
    return "Oops! " + error.message;
  }

  return (
    <div className="App">
      <header className="App-header">
      <Section>
        { data.map( element =>
            <Box>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                </Media.Item>
                <Media.Item position="left">
                  <Content>
                    <p>
                      <Tag color="link"> Name </Tag>
                      <strong className="horizontalPad">{element.name}</strong>
                      <Tag color="info"> Drawing </Tag>
                      <small className="horizontalPad">{element.drawing}</small>
                      <Tag color="info"> Mold </Tag>
                      <small className="horizontalPad">{element.mold}</small>
                      <br />
                    </p>
                  </Content>
                  <Level breakpoint="mobile">
                    <Level.Side align="left">
                      <Button link size="small">Add</Button>
                      <Button link size="small">Download</Button>
                    </Level.Side>
                  </Level>
                </Media.Item>
              </Media>
            </Box>
          )}
        </Section>
      </header>
    </div>
  );
}

export const Cap = () => {
  const { isLoading, error, data } = useQuery("caps", getCaps);
  console.log(data);
  if (isLoading) return "Loading...";
  if (error) {
    return "Oops! " + error.message;
  }

  return (
    <div className="App">
      <header className="App-header">
      { data.map( element =>
        <li key = { element.name }>{ element.name }</li>
      )}
      </header>
    </div>
  );
}
