import {VizNavigation as MyNavbar} from "../routes/VizNavigation";
import Container from "react-bootstrap/Container";
export function MainPageContent() {
    return (
        <Container className="justify-content-md-center">
                <p>Crime is a serious issue in American cities and across the world. The City of Chicago provides an
                    extensive overview of every reported crime that occurred in Chicago since 2001 (~23 years to date)
                    and
                    updates it daily. Cities frequently do not publish their crime-related data publicly, so the City of
                    Chicago's dataset, which is vast and extensive, is very valuable for understanding reported crimes
                    in Chicago.</p>
                <p>Further, crime is a complex and multi-faceted issue. There are potentially infinite research
                    questions on
                    crime.
                    A few examples: How has the crime rate in Chicago changed over time? What are the most likely
                    locations
                    for the next crime in Chicago? How do the number of arrests compare between violent vs non-violent
                    crimes?</p>
                <p>Visualizing this data provides a way to understand some of these questions. Some visualization
                    approaches
                    can also guide modeling, e.g. crime prediction, that can be used to make forecasts.</p>

        </Container>

    );
}
