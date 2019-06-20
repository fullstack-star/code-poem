//常量
const TOP_LEAGUE_CHAMPION = 10;
const UEFA_CHAMPIONS_LEAGUE_CHAMPION = 20;

const WORLD_CUP = [20, 10, 5];

const EUROPEAN_CUP = [10, 5, 2];

const AMERICA_CUP = [5, 2];

const DEADLINE = 2018;

class SoccerStar {
  //类
  constructor(obj) {
    this.name = obj.name;
    this.isEuropean = obj.isEuropean; //布尔
    this.leagueChampionCount = obj.leagueChampionCount;
    this.championsChampionCount = obj.championsChampionCount;
    this.wordlCupCount = obj.wordlCupCount;
    this.europeanCupCount = obj.europeanCupCount;
    this.americaCupCount = obj.americaCupCount;
  }

  calClubPoints() {
    //函数
    return (
      this.leagueChampionCount * TOP_LEAGUE_CHAMPION +
      this.championsChampionCount * UEFA_CHAMPIONS_LEAGUE_CHAMPION
    );
  }

  calNationalPoints() {
    if (this.isEuropean) {
      return (
        this._calPoints(this.wordlCupCount, WORLD_CUP) +
        this._calPoints(this.europeanCupCount, EUROPEAN_CUP)
      );
    } else {
      return (
        this._calPoints(this.wordlCupCount, WORLD_CUP) +
        this._calPoints(this.americaCupCount, AMERICA_CUP)
      );
    }
  }

  _calPoints(count, point) {
    //私有属性
    let points = 0; //变量
    if (Array.isArray(count) && Array.isArray(point)) {
      count.forEach((n, i) => {
        points += point[i] * n;
      });
    } else {
      points = point * count;
    }
    return points;
  }
}

const PORTUGAL_SUPERSTAR = new SoccerStar({
  name: "Cristiano Ronaldo",
  isEuropean: true,
  leagueChampionCount: 5,
  championsChampionCount: 5,
  wordlCupCount: [0, 0, 1],
  europeanCupCount: [1, 1, 1],
  americaCupCount: null
});

const ARGENTINA_SUPERSTAR = new SoccerStar({
  name: "Lionel Messi",
  isEuropean: false,
  leagueChampionCount: 4,
  championsChampionCount: 9,
  wordlCupCount: [0, 1, 0],
  europeanCupCount: null,
  americaCupCount: [0, 3]
});

console.log(
  `
  ${
    PORTUGAL_SUPERSTAR.name
  } -- 俱乐部成绩得分：${PORTUGAL_SUPERSTAR.calClubPoints()}--国家队成绩得分：${PORTUGAL_SUPERSTAR.calNationalPoints()}
  `
);
console.log(
  `
  ${
    ARGENTINA_SUPERSTAR.name
  } -- 俱乐部成绩得分：${ARGENTINA_SUPERSTAR.calClubPoints()}--国家队成绩得分：${ARGENTINA_SUPERSTAR.calNationalPoints()}
  `
);
