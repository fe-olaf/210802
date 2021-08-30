// 1. initialize => 값의 초기화
// 2. componentUpdateState => 초기화된 값을 컴포넌트들에게 알린다.
// 3. render => state 값에 따라서 view 를 바꾼다.
// 4. componentBindEvent => 이벤트를 바인딩한다.

class Pokemon {
  constructor() {
    this.pokemons = [] // 원본
    this.filteredPokemons = [] // 필터링된 포켓몬
    this.pokemonTypes = []
    this.selectedType = 'all' // 선택된 타입

    this.initialize()
  }

  // 값을 가져온다. async, value
  async initialize() {
    // 1. 값을 가져온다.
    await this.getPokemons()
    // 2. 값을 가져온 후의 동작 => ex. render
    this.componentUpdateState()

    // 3. render -> event
    this.componentBindEvent()
  }

  componentBindEvent() {
    // 4. 필터 클릭 이벤트
    this.onClickFilter()
  }

  // 값이 변한 후의 포인트
  componentUpdateState() {
    // 포켓몬 값에따라 리스트를 그린다.
    // 포켓몬 값에따라 filter 를 그릴수도
    this.render()
  }

  onClickFilter() {
    document.getElementById('hash-nav').addEventListener('click', (e) => {
      const type = e.target.innerText

      if (type) {
        this.selectedType = type
        this.componentUpdateState()
      }
    })
  }

  async getPokemons() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`,
      )

      if (response.ok) {
        const { results } = await response.json()

        // eslint-disable-next-line
        const extractPokemons = await Promise.all(
          results.map(async ({ url }) => {
            const pokemonResponse = await fetch(url)

            const pokemon = await pokemonResponse.json()

            const {
              name,
              id,
              sprites: { front_default: img },
              types,
            } = pokemon

            return {
              id: id,
              name: name,
              img: img,
              types: types.map(({ type: { name } }) => name),
            }
          }),
        )

        this.pokemons = extractPokemons
        this.filteredPokemons = this.filterPokemons()
      }
    } catch (e) {
      window.alert('일시적인 장애가 일어났습니다. 다시 시도해주세요')
    }

    //   .then((data) => {
    //     data.results.forEach((el) => {
    //       const { url } = el

    //       fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {

    //           for (const type of types) {
    //             if (!this.pokemonTypes.includes(type.type.name)) {
    //               this.pokemonTypes = [...this.pokemonTypes, type.type.name]
    //             }
    //           }
    //         })
    //     })
    //   })
  }

  filterPokemons() {
    if (this.selectedType === 'all') {
      return this.pokemons
    }

    return this.pokemons.filter((pokmemon) => {
      return pokmemon.types.includes(this.selectedType)
    })
  }

  render() {
    console.log('this.filteredPokemons', this.filteredPokemons)
    document.getElementById('app').innerHTML = this.filteredPokemons.reduce(
      (acc, cur) => {
        return `
          ${acc}
          <li class='${cur.id}'>
            <h2>${cur.name}</h2>
            <img src='${cur.img}' alt='${cur.name}'>
            <p>
              ${cur.types.reduce((ac, name) => {
                // forEach는 리턴이안된다.
                return `
                 ${ac}
                 <span>${name}</span>
                `
              }, ``)}
            </p>  
          </li>
        `
      },
      ``,
    )

    document.getElementById('hash-nav').innerHTML = this.pokemonTypes.reduce(
      (acc, cur) => {
        return `
            ${acc}
            <li>${cur}</li>
          `
      },
      `<li>all</li>`,
    )
  }
}
new Pokemon()
