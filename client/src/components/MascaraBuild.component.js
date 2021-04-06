import React from 'react';
import Section from "react-bulma-components/lib/components/section";
import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import Tag from 'react-bulma-components/lib/components/tag';
import Content from 'react-bulma-components/lib/components/content';
import '../App.css';
import { useQuery } from "react-query";
import { getBuild} from "../middlewares/services";

const MascaraBuild = () => {
  const { isLoading, error, data } = useQuery("build", getBuild);
  if (isLoading) return "Loading...";
  if (error) return "Oops! ";

  return (
    <Section>
    {data[0] ?
      <Box>
      { data.map( element =>
        <Media>
          <Media.Item>
            {element.bottle ?
              <Content>
                <p>
                <Tag className="is-link is-light">Name</Tag>
                  <strong className="horizontalPad">{ element.bottle.name }</strong>
                  <br />
                <Tag color="info">Thread</Tag>
                  <small className="horizontalPad">{ element.bottle.thread }</small>
                  <br />
                <Tag color="info">Depth</Tag>
                  <small className="horizontalPad">{ element.bottle.depth }</small>
                </p>
              </Content>
            : "" }
          </Media.Item>
          <Media.Item>
            {element.brush ?
              <Content>
                <p>
                <Tag className="is-link is-light">Name</Tag>
                  <strong className="horizontalPad">{ element.brush.brush }</strong>
                  <br />
                <Tag color="info">Type</Tag>
                  <small className="horizontalPad">{ element.brush.type }</small>
                  <br />
                <Tag color="info">Length</Tag>
                  <small className="horizontalPad">{ element.brush.brushLength }</small>
                  <br />
                <Tag color="info">Shaft diameter</Tag>
                  <small className="horizontalPad">{ element.brush.shaftDiameter }</small>
                  <br />
                <Tag color="info">Brush diameter</Tag>
                  <small className="horizontalPad">{ element.brush.brushDiameter }</small>
                </p>
              </Content>
            : "" }
          </Media.Item>
          <Media.Item>
            {element.rod ?
              <Content>
                <p>
                <Tag className="is-link is-light">Name</Tag>
                  <strong className="horizontalPad">{ element.rod.name }</strong>
                  <br />
                <Tag color="info">Thread</Tag>
                  <small className="horizontalPad">{ element.rod.thread }</small>
                  <br />
                <Tag color="info">Length</Tag>
                  <small className="horizontalPad">{ element.rod.dimensions.length }</small>
                  <br />
                <Tag color="info">Shaft diameter</Tag>
                  <small className="horizontalPad">{ element.rod.dimensions.brushDiameter }</small>
                  <br />
                <Tag color="info">Rod diameter</Tag>
                  <small className="horizontalPad">{ element.rod.dimensions.rodDiameter }</small>
                </p>
              </Content>
            : "" }
          </Media.Item>
          <Media.Item>
            {element.wiper ?
              <Content>
                <p>
                <Tag color="info">Name</Tag>
                  <strong className="horizontalPad">{ element.wiper.name }</strong>
                <Tag color="info">Mold</Tag>
                  <small className="horizontalPad">{ element.wiper.mold }</small>
                <Tag color="info">drawing</Tag>
                  <small className="horizontalPad">{ element.wiper.drawing }</small>
                </p>
              </Content>
            : "" }
          </Media.Item>
        </Media>
        )}
      </Box>
      : "" }
    </Section>
  )
};

export default MascaraBuild;
