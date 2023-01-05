import { PageTitle } from './PageTitle/PageTitle.jsx';
import { EventBoard } from './EventBoard/EventBoard.jsx';
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
  return (
    <>
    
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents}/>
    </>
  );
};
