import React, {useMemo} from "react";
import './factoryDetail.css';
import RecipeInfo from "../../engine/v1/static/recipeInfo";
import factories from "../../engine/v1/gamestate/factory";

export default function FactoryDetailView({factoryName}) {
    const factory = useMemo(() => factories[factoryName],[factoryName])

    //TODO refresh component on select

    return <div className="factoryDetail" onClick={e => e.stopPropagation()} onMouseDown={e => e.stopPropagation()}>
        <div className="btn-group dropdown">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                Select Recipe...
            </button>
            <div className="dropdown-menu">
                {[null].concat(Object.values(RecipeInfo)).map(r =>
                    <button
                        className={`dropdown-item ${r === factory.recipe ? "active" : ""}`}
                        onClick={() => factory.setRecipe(r)}>
                        {r === null ? "< none >" : r.displayName }
                    </button>
                )}
            </div>
        </div>
    </div>
}
