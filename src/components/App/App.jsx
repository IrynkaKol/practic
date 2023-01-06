import { PageTitle } from '../PageTitle/PageTitle.jsx';
import { EventBoard } from '../EventBoard/EventBoard.jsx';
import upcomingEvents from '../../../src/upcoming-events.json'
import { Container } from './App.styled'

export const App = () => {
  return (
    <Container>
    
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents}/>
    </Container>
  );
};
