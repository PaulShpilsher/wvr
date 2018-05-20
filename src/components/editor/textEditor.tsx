
import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"

type State = {
    value: Value;
};

type Props = {};

const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: '',
                },
              ],
            },
          ],
        },
      ],
    },
  });



export class TextEditor extends React.Component<undefined, State> {
    state = {
            value: initialValue
        };

    onChange = ({ value }) => {
        this.setState({ value });
      }


    render() {
        return <Editor value={this.state.value} onChange={this.onChange} />
      }

}
