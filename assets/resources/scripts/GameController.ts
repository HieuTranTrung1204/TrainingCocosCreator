
enum GameState { 
    None,
    MainMenuGame,
    InGame, 
    EndGame
}
enum a{ 

}

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameWorldController extends cc.Component {

    @property (cc.Node) GuiManager : cc.Node = null;

    @property (cc.Node) bar : cc.Node = null;

    @property (cc.Canvas) canvas : cc.Canvas = null;


    state : GameState;
    layer_MainMenu : cc.Node;

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.state = GameState.None;
        cc.log('aa');
        this.canvas.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
        cc.log('bb');
    }

    start () {
        this.layer_MainMenu = this.GuiManager.getChildByName("MainMenu");
        this.init ();
    }

    update (dt) {
        switch(this.state) {
            case GameState.MainMenuGame: {
                // code effect for main menu 

                break;
            }
            case GameState.InGame: {
                /// code logic game update component in game 
                break;
            }
            case GameState.EndGame: {
                break;
            }
        }
    }

    init() {
        this.layer_MainMenu.active = true;  
        this.state = GameState.MainMenuGame;
    }

     /// GUI 
    btnPlay() {
        cc.log("btnPLAY");
        this.state = GameState.InGame;
        this.layer_MainMenu.active = false;

     }

     onTouchMove(event) {
        if (this.state != GameState.InGame) {
            return
        }
        var x = event.touch._point.x
        if (x < this.bar.getContentSize().width/2) {
            x = this.bar.getContentSize().width/2
        } else if (x > cc.winSize.width - this.bar.getContentSize().width/2) {
            x = cc.winSize.width - this.bar.getContentSize().width/2
        }
        this.bar.x = x
    }
}