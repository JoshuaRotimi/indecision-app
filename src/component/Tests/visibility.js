import React , {Component} from 'react';

class Visibility extends Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })

    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details': 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see.</p>
                    </div>
                )}
            </div>
        );
    }

}

export default Visibility;
