import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { runInThisContext } from 'vm';
import './ConcertBid.css'

const moment = require('moment')

@inject("UserStore")
@inject("ConcertStore")
@observer

class ConcertBid extends Component {
    constructor() {
        super()
        this.interval=0
        this.state = {
            timer: undefined
        }
    }

    componentDidMount() {
        this.props.ConcertStore.getConcert(this.props.clientId)

        this.countdown()
        this.setState({ timer: this.props.ConcertStore.concert.ends_at })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    countdown = (e) => {
        console.log("countdown")
        console.log('30-08-2019 10:30:00')
        console.log("ends at: ")
        console.log(this.props.ConcertStore.concert.ends_at)
        // var $clock = $('#clock'),
        let time = moment(this.props.ConcertStore.concert.ends_at).format('DD-MM-YYYY HH:mm:ss')
        console.log("ends at2: ")
        console.log(time)
        console.log("time")

        console.log(time)
        //    var eventTime = moment(time).unix(),
        var eventTime = moment(time, 'DD-MM-YYYY HH:mm:ss').unix(),


            // var eventTime = moment(this.props.ConcertStore.concert.ends_at, 'DD-MM-YYYY HH:mm:ss').unix(),

            // var eventTime = moment('30-08-2019 10:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
            currentTime = moment().unix(),
            diffTime = eventTime - currentTime,
            duration = moment.duration(diffTime * 1000, 'milliseconds'),
            intervalTime = 1000;
        console.log("currentTime")
        console.log(moment())
        // if time to countdown
        if (diffTime > 0) {
            this.interval = setInterval(() => {
                duration = moment.duration(duration.asMilliseconds() - intervalTime, 'milliseconds');
                var d = moment.duration(duration).days(),
                    h = moment.duration(duration).hours(),
                    m = moment.duration(duration).minutes(),
                    s = moment.duration(duration).seconds();
                console.log("in interval:")
                console.log(`${d}:${h}:${m}:${s}`)
                this.setState({ timer: `${d}:${h}:${m}:${s}` })
            }, intervalTime);
        } else {
            console.log("TIME is PASSED!!!!")
        }
    };

    handleBid = (e) => {
        this.props.ConcertStore.handleBid(e.target.value)
    }
    makeBid = () => {
        console.log("makeBid ConcertBid")
        this.props.ConcertStore.makeBid()
    }


    render() {
        console.log("LIAT")
        console.log(this.props.ConcertStore.concert.ends_at)
        return (
            <div className="concert-bid">
                <input id="bid" type="number" placeholder="$" value={this.props.ConcertStore.bid} onChange={this.handleBid}></input>
                <button onClick={this.makeBid}>Make a bid!</button>
                {/* <div>Bid ends in {moment(this.props.ConcertStore.concert.ends_at).fromNow('LTS')}</div> */}
                <div>{this.props.ConcertStore.concert.user_highest_bid ? "Your last bid is"  +  this.props.ConcertStore.concert.user_highest_bid + "$" : null}</div>
                <div>Bid ends in {this.state.timer}</div>
            </div>)
    }
}
// bid_end_date: Date,
//          bid_end_hour: Date,
export default ConcertBid