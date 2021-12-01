import React from "react";
// import { initialState, reducer, SECTION, ACTION } from "./reducer";
import axios from "../../libs/axios";
// import { StyledSection } from "./index.styled";


async function InsightsPage() {
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const { section, score, feelings, notes } = state;

    const averageScore = await axios.get("/insights").then((res) => {
        console.log(res.data);

        const scores = res.data.map(item => {
            return item.score;
        });

        const sum = scores.reduce((a, b) => a + b, 0);
        const avg = (sum / scores.length) || 0;
        console.log(avg);
        return avg;
    });

    return (<div>{averageScore}</div>); 
    // return null;    
}

export default InsightsPage;