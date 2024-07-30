import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import ResultItem from '../ResultItem';

test('Renders ResultItem row component when given id, title and release_date props', () => {
    let id: string = "id string";
    let title: string = "Some Ghibli Movie Name";
    let release_date: string = "Some/Date/String";

    render(
        <Router>
            <table>
                <tbody>
                    <ResultItem id={id} title={title} release_date={release_date} />
                </tbody>
            </table>
        </Router>
    );
    const element = screen.getByText(/Some Ghibli Movie Name/i);
    expect(element).toBeInTheDocument();
})