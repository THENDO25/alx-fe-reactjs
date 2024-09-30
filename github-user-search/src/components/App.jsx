function App(){
const apikey = process.env.REACT_APP_GITHUB_API_KEY;

fetch('http://www.api.example.com/${apikey}')

return <div>App component;</div>;

}
export default App;