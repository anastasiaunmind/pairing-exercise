import React, { useState } from "react";
import FeelingsCloud from "./index";

export default {
    title: "Unmind/FeelingsCloud",
    component: FeelingsCloud,
    parameters: {
        backgrounds: {
            default: "lightgrey",
            values: [
                { name: "lightgrey", default: true, value: "lightgrey" },
                { name: "grey", value: "grey" },
                { name: "white", value: "white" },
            ],
        },
    },
};

const Template = (args) => {
    const [items, setItems] = useState(args.items, []);

    return (
        <FeelingsCloud {...args} items={items} onChange={(val) => {
            setItems(items.map(item => item.value === val.value ? val : item));
        }} />
    );
};

export const Even = Template.bind({});

Even.args = {
    items: [
        { value: "happy", checked: false, label: "Happy" },
        { value: "excited", checked: false, label: "Excited" },
        { value: "optimistic", checked: false, label: "Optimistic" },
        { value: "thankful", checked: false, label: "Thankful" },
    ],
    onChange: () => { console.log("clicked"); }
};

export const Odd = Template.bind({});

Odd.args = {
    items: [
        { value: "happy", checked: false, label: "Happy" },
        { value: "excited", checked: false, label: "Excited" },
        { value: "optimistic", checked: false, label: "Optimistic" },
        { value: "thankful", checked: false, label: "Thankful" },
        { value: "sad", checked: false, label: "Sad" },
    ],
    onChange: () => { console.log("clicked"); }
};


export const Empty = Template.bind({});

Empty.args = {
    items: [],
    onChange: () => { console.log("clicked"); }
};
