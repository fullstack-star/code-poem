
const THE_TRADE_WAR = (function () {
    let crazyAmerican = "Donald Trump"

    class CrazyUSA{
        constructor(aGroupOfCrazyGuys){
            this.stakeholders = aGroupOfCrazyGuys
        }

        emit(socalledReasonableReason, socalledLaw){
            try{
                let e = new Error(socalledReasonableReason)
                e.message = socalledLaw
                throw e
            }catch (e){
                console.error(`${e.message}!? How RIDICULOUS!!!`)
            }finally {
                console.trace('NOT WORKING AS PLAN')
            }
        }
    }

    class GreatChina{
        constructor(name){
            this.president = name
        }

        registerPlan(plan){
            this.handlerMap = plan
        }

        on(event){
            this.handlerMap[event]()
        }
    }

    const _process = () => {
        let evilUSA = new CrazyUSA([crazyAmerican, 'other crazy people'])
        let chineseGov = new GreatChina('Xi')
        chineseGov.registerPlan({
            'raiseTariff': function () {
                return 'we raise back accordingly'
            },
            'techWar': function () {
                return ['rare earth restriction', '...']    //Top Secret
            },
            'financialWar': function () {
                return ['Selling US debt', '...']   //Top Secret
            },
            'hotWar': function () {
                return ['Dongfeng 21D','Big wave 3','...','nuclear Bomb']   //Top Secret
            },
            'wantNegotiation':function () {
                return 'WELCOME! BUT PLEASE BE SERIOUSLY!'
            }
        })

        evilUSA.emit('raiseTariff', 'Start 301-investigation')
        evilUSA.emit('raiseTariff', 'Raise Tariff For 50Billion Goods')
        evilUSA.emit('raiseTariff', 'Raise Tariff For 200Billion Goods')
        evilUSA.emit('techWar', 'Ban Out HUAWEI For Building 5G Infrastructure')
        evilUSA.emit('techWar', 'Launch Economic Sanctions To Other 12 Chinese Corporates and People')
        evilUSA.emit('techWar', 'Make The Tech Companies and NGOs Follow The Restriction For HUAWEI')

        return 'TO BE CONTINUE...'  //Be aware! Things might be getting worse and dirtier!
    }

    return {
        showReason: function () {
            console.warn(`${crazyAmerican} said that wanna make America great again`)
        },
        getProcess: function () {
            _process()
        },
        showResult: function () {
            console.info(`Eventually, the Chinese people win AGAIN`)
        }
    }
})()