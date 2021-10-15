import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    // component registeration
    renderSquare(i) {
        return <Square valueName={i} />;
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {/* // Direct using component */}
                    <Square valueName={3} />
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueName: null,
        }
    }
    recordClick(no) {
        return () => { this.setState({ valueName: `${no}X` }) };
    }
    render() {
        // inside onClick you have to define () => { }, so you can use external function like line no. 37
        return <button className="square" onClick={this.recordClick(this.props.valueName)}>{this.state.valueName}</button>;
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);