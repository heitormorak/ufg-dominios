const SearchBar = () => (
    <form action="/" method="get">

		<div style={{display:'flex', width: '100%', height:'90%', alignItems:'center', justifyContent:'center', marginBottom: '20%'}}>
        
            <label htmlFor="header-search">
                <span style={{textAlign:'start', marginBottom: '10px', fontSize:'18px', fontWeight: '400'}}>Pesquisar relatório </span>
            </label>
            <input
                type="text"
                placeholder="Digite o número do relatório"
                name="s" 
                style={{fontFamily: 'tisa_sans_probold', width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px', margin:'0 4%'}}
            />
            <button type="submit"
                    style={{fontFamily: 'tisa_sans_probold', borderRadius: '10px', border:'none', padding: '10px', backgroundColor: '#164C34', color: '#FFFFFF'}}
                    >Procurar
            </button>
        </div>
    </form>
);

export default SearchBar;