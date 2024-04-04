/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import "./GuideListPage.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";

const GuideListPage = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getGuides();
  }, [store]);

  if (store.isLoading) {
    return (
      <div className="city container text-center">
        <Spinner className="text-center text-primary" />
      </div>
    );
  }

  const updateHandler = (id: string, status: string) => {
    store.updateUserStatus(id, status);
  };

  return (
    <div className="city container">
      <div>
        <h2>Список гидов</h2>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Имя</th>
              <th>Email</th>
              <th>Статус</th>
              <th>Управление</th>
            </tr>
            {store.guides.map((guide) => (
              <tr key={guide.id}>
                <td>
                  <a className="link-primary">{guide.userId?.name}</a>
                </td>
                <td className="text-success">{guide.userId?.email}</td>
                <td>
                  <a
                    className={
                      guide.status === "accepted"
                        ? "link-success"
                        : "link-warning"
                    }
                  >
                    {guide.status.toUpperCase()}
                  </a>
                </td>
                <td>
                  {guide.status === "accepted" ? (
                    <a
                      className="btn bg-warning me-2 border-0"
                      onClick={() => {
                        updateHandler(guide._id, "pending");
                      }}
                    >
                      Отменить
                    </a>
                  ) : (
                    <a
                      className="btn bg-success btn-primary me-2 border-0"
                      onClick={() => {
                        updateHandler(guide._id, "accepted");
                      }}
                    >
                      Принять
                    </a>
                  )}
                  <a
                    className="btn btn-danger btn btn-primary"
                    href="/edit/6569705d625846c424eea008"
                  >
                    Удалить
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default observer(GuideListPage);
