export default function ListPicker({ values }) {

    const ranIndx = Math.floor(Math.random() * values.length);
    const ranvalues = values[ranIndx];
    return (


        <div>
            <p>Array list : {values}</p>
            <p>Random Index: {ranIndx}</p>
            <p>Random Index: {ranvalues}</p>
        </div>
    );
}