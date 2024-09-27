import ColorBox from "./ColorBox";

export default function ColorBoxList() {
    const numberOfBoxes = 20; // Define the number of ColorBox components you want

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '500px', height: '500px' }}>
            {
                Array.from({ length: numberOfBoxes }).map((_, index) => (
                    <ColorBox key={index} /> // Pass a unique key for each ColorBox
                ))
            }
        </div>
    );
}
