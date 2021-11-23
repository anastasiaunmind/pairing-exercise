import React from "react";
import { render } from "@testing-library/react";
import FeelingsCloud from ".";

test("renders Feelings cloud", () => {
    const items = [
        { value: "happy", checked: false, label: "Happy" },
        { value: "excited", checked: false, label: "Excited" },
    ];
    const { container } = render(<FeelingsCloud items={items} onChange={() => {}} />);

    expect(container).toMatchSnapshot();
});

// todo unit tests