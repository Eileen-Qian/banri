import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function AdminNotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <i className="bi bi-flower1 not-found__icon" />
      <h1 className="not-found__title">{t("notFound.subtitle")}</h1>
      <p className="not-found__desc">{t("notFound.adminDesc")}</p>
      <NavLink to="/admin/products" className="btn btn-outline-primary">
        <i className="bi bi-arrow-left me-1" />
        {t("notFound.backAdmin")}
      </NavLink>
    </div>
  );
}

export default AdminNotFound;
