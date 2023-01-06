import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt,FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
//import { formatEventStart } from 'utils/formatEventStart'
//import { formatEventDuration } from 'utils/formatEventDuraction'
import { iconSize } from 'constants'
import { Card, EventName, Info, Chip } from './Event.styled'
//import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  //console.log(css)
  //console.log(css[type])
    return (
        <Card /*className={css.event}*/>
          <EventName /*className={css.title}*/>{name}</EventName>
          <Info /*className={css.info}*/>
            <FaMapMarkerAlt /*className={css.icon}*/ size={iconSize.sm}/>
            {location}
          </Info>
          <Info /*className={css.info}*/>
            <FaUserAlt /*className={css.icon}*/ size={iconSize.sm}/>
            {speaker}
          </Info>
          <Info>
            <FaCalendarAlt /*className={css.icon}*/ size={iconSize.sm}/>
            {formattedStart}
          </Info>
          <Info>
            <FaClock /*className={css.icon}*/ size={iconSize.sm}/>
            {duration}
          </Info>
          <Chip eventType={type} a={5} b={10}/*className={`${css.chip} ${css[type]}`}*/>{type}</Chip>
        </Card>
      );
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}