import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function FrontNotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <i className="bi bi-flower1 not-found__icon" />
      <h1 className="not-found__title">{t("notFound.subtitle")}</h1>
      <p className="not-found__desc">{t("notFound.desc")}</p>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <NavLink to="/" className="btn btn-outline-primary">
          <i className="bi bi-house me-1" />
          {t("notFound.backHome")}
        </NavLink>
        <NavLink to="/products" className="btn btn-primary">
          {t("notFound.goShopping")}
        </NavLink>
      </div>
    </div>
  );
}

export default FrontNotFound;
