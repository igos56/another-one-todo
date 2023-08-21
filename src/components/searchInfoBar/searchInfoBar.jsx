import PropTypes from "prop-types";

const SearchInfoBar = ({ count }) => {
    return (
        <nav
            className="navbar mb-2 rounded"
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <div className="container-fluid">
                <h2 className="navbar-brand">
                    {count > 0 ? (
                        <span className="ms-3 text-primary">
                            В списке {count} неотложных дел
                        </span>
                    ) : (
                        <>
                            <div
                                className="spinner-border text-info"
                                role="status"
                            ></div>
                            <span className="ms-3 text-secondary">
                                Ищем дела ... может добавить дело?
                            </span>
                        </>
                    )}
                </h2>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Поиск"
                        aria-label="Поиск"
                    />
                    <button className="btn btn-outline-info" type="submit">
                        Найти
                    </button>
                </form>
            </div>
        </nav>
    );
};

SearchInfoBar.propTypes = {
    count: PropTypes.number.isRequired
};

export default SearchInfoBar;
