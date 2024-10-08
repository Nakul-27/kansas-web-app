export default function Modules() {
    return (
        <div>
            <button id="wd-collapse-all" onClick={() => alert("Collapsing")} type="button">
                Collapse All
            </button>
            <button id="wd-view-progress" onClick={() => alert("View Progress")} type="button">
                View Progress
            </button>
            <button id="wd-add-module" onClick={() => alert("Add Module")} type="button">
                +Module
            </button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

