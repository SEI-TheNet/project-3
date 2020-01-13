import React, {Component} from 'react';
import "../experience/Exper.css"
class Exper extends Component {
    state = { 
        posts: [],

        addedData: {
            user: "",
            img: "",
            description: ""
        }
     }

     addedDataHandler = (event) => {
        const key = event.target.name  //name in the input tage
        const value = event.target.value // value that user enter in the input tag
        this.setState(({...copyState}) => {
          copyState.addedData[key] = value
          return copyState
        })
      }


     onSubmitHandler = event => {
        event.preventDefault()
        this.setState(({...copyState}) => {
          copyState.posts.push(copyState.addedData)
          copyState.addedData = {
            user: "",
            img: "",
            description: ""
          }

          return copyState
        })}
    render() { 
        return ( 
            <div className="container"> 
            <div className="form">
              <form onSubmit={this.onSubmitHandler}>
               <div>
                    <label>User Name:</label>
                    <input
                    name="user"
                    value={this.state.addedData.user}
                    onChange={this.addedDataHandler}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                    name="img"
                    value={this.state.addedData.img}
                    onChange={this.addedDataHandler}
                    />
                </div>
                <div>
                    <label>write comment:</label>
                    <input
                    name="description"
                    value={this.state.addedData.description}
                    onChange={this.addedDataHandler}
                    />
                </div>

                <div>
                    <input type="submit"/>
                </div>

              </form>
                {this.state.posts.map(post => (
                <div>
                    <img src={post.img} />
                    <h4>{post.user}</h4>
                    <p>{post.description}</p>
                </div>
        ))}

            </div>
            </div>
         );
    }
}
 
export default Exper;