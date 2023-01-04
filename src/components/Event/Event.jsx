import PropTypes from 'prop-types';
import css from './Event.module.css'

export const Event = ({ name, location, speaker, type, start, end }) => {
    return 
    (
        <div className={css.event}>
          <h2 className={css.title}>{name}</h2>
          <p className={css.info}>
            <i className={css.icon}></i>
            {location}
          </p>
          <p className={css.info}>
            <i className={css.icon}></i>
            {speaker}
          </p>
          <p className={css.info}>
            <i className={css.icon}></i>
            Start date
          </p>
          <p className={css.info}>
            <i className={css.icon}></i>
            Duration
          </p>
          
        </div>
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