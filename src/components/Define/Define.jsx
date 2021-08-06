import './Define.css'

export default function Define({ word, meanings, category, LightMode }) {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === 'en' && (
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{ backgroundColor: '#fff', borderRadius: 10, margin: 10 }} controls >
                        Your Browser doesn't support audio element
                    </audio>
                )
            }

            {
                word === "" ? (
                    <span className="subTitle">Start by typing a word in Search</span>
                ) : (
                    meanings.map(mean => (
                        mean.meanings.map(item => (
                            item.definitions.map(def => (
                                <div className="singleMean" style={LightMode ? { backgroundColor: "gray", color: "white" } : { backgroundColor: "white", color: "black" }}>
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {
                                        def.example && (
                                            <span>
                                                <b>Example : </b> {def.example}
                                            </span>
                                        )
                                    }
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms : </b> {def.synonyms.map(s => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    )
}
