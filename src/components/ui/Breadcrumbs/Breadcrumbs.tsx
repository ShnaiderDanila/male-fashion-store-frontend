import { Link, useLocation } from 'react-router-dom';
import { FC, Fragment } from 'react';

import pathNamesRU from '../../../utils/constants/pathNamesRU';
import Container from '../Container/Container';

interface BreadcrumbsProps {
  currentEndpointName?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ currentEndpointName }) => {
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').filter((x) => x);

  const generateBreadcrumb = (name: string) => {
    let breadcrumbPath = '';
    let breadcrumbName = '';

    breadcrumbPath += `/${name}`;

    if (pathNamesRU[name]) {
      breadcrumbName = pathNamesRU[name];
    } else if (currentEndpointName) {
      breadcrumbName = currentEndpointName;
    } else {
      breadcrumbName = name;
    }

    return [breadcrumbName, breadcrumbPath];
  };

  return (
    <section className="hidden lg:block pt-10 pb-8 bg-[#f3f2ee]">
      <Container>
        <nav className="flex gap-2">
          <Link to="/">Главная</Link>
          {pathnames.map((name, index) => {
            const [breadcrumbName, breadcrumbPath] = generateBreadcrumb(name);
            const isLast = index === pathnames.length - 1;
            return (
              <Fragment key={name}>
                <span className="select-none">&gt;</span>
                {isLast ? (
                  <span key={name} className="text-primary-light">
                    {breadcrumbName}
                  </span>
                ) : (
                  <Link key={name} to={breadcrumbPath}>
                    {breadcrumbName}
                  </Link>
                )}
              </Fragment>
            );
          })}
        </nav>
      </Container>
    </section>
  );
};

export default Breadcrumbs;
