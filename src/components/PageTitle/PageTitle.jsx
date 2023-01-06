import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled'
//import css from './PageTitle.module.css'

export const PageTitle = ({text}) => {
    return <Title /*className={css.title}*/>{text}</Title>
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}