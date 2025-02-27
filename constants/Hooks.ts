import { useState, useEffect } from "react";

// FETCHING HOOK
export function useFetch<T>(uri: string, { method, data }: { method?: string; data?: any; }) {
    const [response, setData] = useState<any | T>();
    const [error, setError] = useState<unknown>("");

    useEffect(() => {
        async function fetchAPI(): Promise<any> {
            try {
                const res: any = await (await fetch(uri, { method: method, body: data })).json();

                setData(res);
            } catch (error) {
                setError(error);
                setData("Something went wrong!");
            };
        };

        fetchAPI();
    }, []);

    const token = Math.floor(Math.random() * 100);

    const res: { data: T, error: any, token: number | string, } = {
        data: response || [],
        error: !error ? "Good to go" : error,
        token: !error ? token : "There is an error.",
    };

    return res;
};

// COLOR SCHEME HOOK
export function useColorScheme(first: string, second: string) {
    if (first === "red") {
        if (second === "yellow") {
            return ["#ff0000", "#fcff4b"];
        } else if (second === "green") {
            return ["#ff0000", "#00f150"];
        } else if (second === "blue") {
            return ["#ff0000", "#19d5ff"];
        } else if (second === "purple") {
            return ["#ff0000", "#9319ff"];
        }
    } else if (first === "yellow") {
        if (second === "red") {
            return ["#fcff4b", "#ff0000"];
        } else if (second === "green") {
            return ["#fcff4b", "#00f150"];
        } else if (second === "blue") {
            return ["#fcff4b", "#19d5ff"];
        } else if (second === "purple") {
            return ["#fcff4b", "#9319ff"];
        }
    } else if (first === "dark") {
        if (second === "yellow") {
            return ["#000000", "#fcff4b"];
        } else if (second === "green") {
            return ["#000000", "#00f150"];
        } else if (second === "blue") {
            return ["#000000", "#19d5ff"];
        } else if (second === "purple") {
            return ["#000000", "#9319ff"];
        } else if (second === "red") {
            return ["#000000", "#ff0000"];
        }
    } else if (first === "blue") {
        if (second === "yellow") {
            return ["#19d5ff", "#fcff4b"];
        } else if (second === "green") {
            return ["#19d5ff", "#00f150"];
        } else if (second === "purple") {
            return ["#19d5ff", "#9319ff"];
        } else if (second === "red") {
            return ["#19d5ff", "#ff0000"];
        }
    }
};

// FORM HOOK
export function useFormInput(initialValue: string) {
    const [value, setValue] = useState<string>(initialValue);

    function handleChange(text: string) {
        setValue(text);
    }

    const inputProps: { defaultValue: string; onChangeText: any; setText: any } = {
        defaultValue: value,
        onChangeText: handleChange,
        setText: setValue,
    };

    return inputProps;
};

// ROUTING HOOK
export function useInternalRouter() {
    const [route, setRoute] = useState<string>("/");

    return {
        route,
        setRoute,
    };
};