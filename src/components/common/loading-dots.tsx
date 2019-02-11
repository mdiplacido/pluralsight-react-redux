import React, { Component } from 'react'

export interface LoadingDotsProps {
    interval: number;
    dots: number;
}

export interface LoadingDotsState {
    frame: number;
}

export default class LoadingDots extends Component<LoadingDotsProps, LoadingDotsState> {
    static defaultProps: LoadingDotsProps = {
        interval: 300,
        dots: 3
    }

    private interval?: number;

    constructor(props: LoadingDotsProps) {
        super(props);
        this.state = { frame: 1 };
    }

    componentDidMount(): void {
        this.interval = window.setInterval(() => {
            this.setState(prev => ({
                frame: prev.frame + 1
            }));
        }, this.props.interval);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        let size = this.state.frame % (this.props.dots + 1)
        const text = ".".repeat(size);
        return (
            <span {...this.props}>{text}&nbsp;</span>
        )
    }
}