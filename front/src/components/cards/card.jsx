import React from 'react'
import {ReactComponent as Badge} from '../../assets/images/badge.svg'
import {ReactComponent as Calendar} from '../../assets/images/calendar.svg'
import {ReactComponent as Platform} from '../../assets/images/hardware.svg'
import {ReactComponent as Publisher} from '../../assets/images/business_center.svg'
import {ReactComponent as America} from '../../assets/images/america.svg'
import {ReactComponent as Europe} from '../../assets/images/europe.svg'
import {ReactComponent as Japan} from '../../assets/images/japan.svg'
import {ReactComponent as World} from '../../assets/images/world.svg'

const Card = ({item}) => {
    return (
      <div key={item.id} className="item">
        <h3 className="item__title">{item.Name}</h3>
        <div className="item__body">
          <div className="item__body-row">
            <span className="item__body-col">
              <Badge/><p className="text">{item.Rank}</p>
            </span>
            <span className="item__body-col">
              <Calendar/><p className="text">{item.Year}</p>
            </span>
            <span className="item__body-col">
              <Platform/><p className="text">{item.Platform}</p>
            </span>
            <span className="item__body-col">
              <Publisher/><p className="text">{item.Publisher}</p>
            </span>
          </div>
          <h4 className="item__body-title">Sales in millions</h4>
          <div className="item__body-row">
              <span className="item__body-col">
                <America/><p className="text">{item.NA_Sales}</p>
              </span>
              <span className="item__body-col">
                <Europe/><p className="text">{item.EU_Sales}</p>
              </span>
              <span className="item__body-col">
                <Japan/><p className="text">{item.JP_Sales}</p>
              </span>
              <span className="item__body-col">
                <World/><p className="text">{item.Global_Sales}</p>
              </span>
          </div>
          <h4 className="item__body-title">Genres</h4>
          <div className="item__body-row">
              <span className="genre">
                {item.Genre}
              </span>
          </div>
        </div>
      </div>
    )
}

export default Card
