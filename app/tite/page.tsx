'use client'

import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
    const [pyHealth, setPyHealth] = useState(null);
    const [jsHealth, setJsHealth] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const pyRes = await axios.get("/api/py/healthcheck");
            setPyHealth(pyRes.data.status);

        const jsRes = await axios.get("/api/healthcheck");
        console.log(jsRes.data);
        setJsHealth(jsRes.data.message);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Health Checks</h1>
            <p>Python API Health: {pyHealth}</p>
            <p>NextJS API Health: {jsHealth}</p>
        </div>
    );
}
