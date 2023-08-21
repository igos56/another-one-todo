import PropTypes from "prop-types";

const SearchInfoBar = ({ count }) => {
    const formatPhrase = (count) => {
        const lastChar = Number(count.toString().slice(-1));
        const lastTwoChar =
            count > 9 ? Number(count.toString().slice(-2)) : undefined;

        if (count > 4 && count < 11) return "неотложных дел";
        if ([2, 3, 4].includes(lastChar) && ![12, 13, 14].includes(lastTwoChar))
            return "неотложных дела";
        if (lastChar === 1 && lastTwoChar !== 11) return "неотложное дело";

        return "неотложных дел";
    };

    return (
        <nav
            className="navbar mb-2 rounded"
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <div className="container-fluid">
                <h2 className="navbar-brand">
                    {count > 0 ? (
                        <span className="ms-3 text-primary">
                            В списке {`${count} ${formatPhrase(count)}`}
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
                    <button className="btn btn-outline-info" type="button">
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
