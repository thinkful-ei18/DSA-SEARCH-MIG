import React from 'react'

export default class LinearSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSet:[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 0, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      currentSearches:0,
      userSearch:-1,
      searchUsed:0
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({userSearch:e.target.currentSearch.value})

  }

  linearSearch(num){
    const searchArray = this.state.dataSet;
    let count = 0
    for(let i = 0; i < searchArray.length ; i++){
      count ++;
      if(num+'' === searchArray[i]+''){
        return count;
      }
    }
    return -1;
  }

  binarySearch(key ,start = 0, end = this.state.dataSet.length-1, depthCounter = 1){
    if(start > end){
      return -1;
    }
    // non mutation??
    let searchArray = []
    this.state.dataSet.forEach(item =>{searchArray.push(item)});
    searchArray.sort((a,b) => a-b);

    let midPoint = Math.floor((start + end) / 2);

    let current = searchArray[midPoint];
    if(current+'' === key+''){
      return depthCounter
    }
    else if(current < key){
    return this.binarySearch(key, midPoint+1 ,end , depthCounter+1);
    }
    else if(current > key){
      return this.binarySearch(key, start ,midPoint-1 , depthCounter+1);
    }



  }

  handleLinearSearch(){
    this.setState({searchUsed:1, currentSearches:this.linearSearch(this.state.userSearch)})
  }

  handleBinarySearch(){
    this.setState({searchUsed:2, currentSearches:this.binarySearch(this.state.userSearch)})
    console.log('binary fail', this.state);
  }


  render(){
    console.log(this.state.searchUsed,'00');
    const searchType = this.state.searchUsed === 1 ? 'Linear' : 'Binary'
    const result = this.state.currentSearches < 1 ?
      undefined :
      `The ${searchType} Search found ${this.state.userSearch} in ${this.state.currentSearches} tries`
    return (
      <div>
      <h1>Searching Algorithims, Linear & Binary</h1>
        <form onSubmit = {(e) => e.preventDefault()}>
        <input type='number' name="currentSearch" id="user-number" onChange={
            (e) => this.setState({userSearch:e.target.value,currentSearches:0})
        }/>
        <button onClick={(e) => {
            this.handleLinearSearch()
          }}> Linear Search </button>
        <button onClick={(e) => {
            this.handleBinarySearch()
          }}>Binary Search</button>
        </form>
      <h3>{result}</h3>
      <p> </p>
      </div>
    )

  }

}
