import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Principal = props => (
    <tr>
        <td>{props.principal.registrationnum}</td>
        <td>{props.principal.articlename}</td>
        <td>{props.principal.principalname}</td>
        <td>{props.principal.birthdate}</td>
        <td>{props.principal.passdate}</td>
        <td>{props.principal.joindate}</td>
        <td>{props.principal.exitdate}</td>
        <td>{props.principal.mobilenum}</td>
        <td>{props.principal.articlemail}</td>
        <td>{props.principal.articleaddress}</td>
        <td>{props.principal.otherdetails}</td>
        <td>
            <Link to ={"/article/edit/" + props.principal._id}>edit</Link> | 
            <a href="/article/" onClick={() => {props.deletePrincipal(props.principal._id)}}>delete</a>
        </td>
    </tr>
)

export default class ArticlesList extends Component {
    constructor(props) {
        super(props);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.state = {articles : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/')
            .then(response => {
                this.setState({articles : response.data});
            })
        .catch((error) => {console.log(error);})
    }

    deleteArticle(id) {
        axios.delete('http://localhost:5000/articles/' + id)
            .then(res => console.log(res.data));
        this.setState({
            articles : this.state.articles.filter(el => el._id !==id)
        })
    }

    articlesList() {
        return this.state.articles.map(currentarticle => {
            return <Principal principal={currentarticle} deletePrincipal={this.deleteArticle} key={currentarticle._id} />;
        })
    }

    render () {
        return(
            <div>
                <h3>List of articles</h3>
                <table className="table table-responsive">
                    <thead className="thead-light">
                        <tr>
                            <th>Registration No</th>
                            <th>Article Name</th>
                            <th>Principal Name</th>
                            <th>Birth Date</th>
                            <th>Pass Date</th>
                            <th>Join Date</th>
                            <th>Exit Date</th>
                            <th>Mobile</th>
                            <th>E-Mail</th>
                            <th>Address</th>
                            <th>Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.articlesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}