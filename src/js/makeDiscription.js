function makeDescription (){
    let body = document.querySelector('body');
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2')
    h1.innerHTML += "Change language ctrl+alt:";
    h2.innerHTML += "Made on linux.";
    div.append(h1);
    div.append(h2);
    body.append(div);

}
export default makeDescription;