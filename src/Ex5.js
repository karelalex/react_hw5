import React from "react";
import './ex5.css'

export class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    UNSAFE_componentWillMount() {
        console.log('will mount')
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log('will mount receive new props')
        if (nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: nextProps.defaultOpen
            })
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('component will update')
    }

    render() {
        const {article} = this.props
        const style = {width: '50%'}
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Дата создания: {(new Date(article.date)).toLocaleDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
}

export const ArticleList = ({articles}) => {
    const articleElements = articles.map((article, index) => (
        <li key={article.id} className="article-list__li">
            <Article article={article} defaultOpen={index === 0}/>
        </li>
    ))

    return (
        <ul>
            {articleElements}
        </ul>
    )
}
