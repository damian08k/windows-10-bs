import { FC } from 'react';

import Button from '_commons/Button/Button';
import Taskbar from '_taskbar/Taskbar/Taskbar';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

import classes from './DesktopView.module.css';

const DesktopView: FC = () => {
  return (
    <div className={classes.root} data-testid="desktop-view">
      <Taskbar />
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          background: 'black',
          padding: '10px',
        }}
      >
        <Button type="primary" state="normal" onClick={() => 1} value="primary normal no icon" />
        <Button
          type="primary"
          state="normal"
          onClick={() => 1}
          mode="light"
          value="primary normal light border"
        />
        <Button
          type="primary"
          state="normal"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="primary normal icon"
        />
        <Button type="primary" state="loading" onClick={() => 1} value="primary loading no icon" />
        <Button
          type="primary"
          state="loading"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="primary loading icon"
        />
        <Button type="primary" state="outline" onClick={() => 1} value="primary outline no icon" />
        <Button
          type="primary"
          state="outline"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="primary outline icon"
        />
        <Button
          type="secondary"
          state="normal"
          onClick={() => 1}
          value="secondary normal no icon"
        />
        <Button
          type="secondary"
          state="normal"
          onClick={() => 1}
          mode="light"
          value="secondary normal light border"
        />
        <Button
          type="secondary"
          state="normal"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="secondary normal icon"
        />
        <Button
          type="secondary"
          state="loading"
          onClick={() => 1}
          value="secondary loading no icon"
        />
        <Button
          type="secondary"
          state="loading"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="secondary loading icon"
        />
        <Button
          type="secondary"
          state="outline"
          onClick={() => 1}
          value="secondary outline no icon"
        />
        <Button
          type="secondary"
          state="outline"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="secondary outline icon"
        />
        <Button type="error" state="normal" onClick={() => 1} value="error normal no icon" />
        <Button
          type="error"
          state="normal"
          onClick={() => 1}
          mode="light"
          value="error normal light border"
        />
        <Button
          type="error"
          state="normal"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="error normal  icon"
        />
        <Button type="error" state="loading" onClick={() => 1} value="error loading no icon" />
        <Button
          type="error"
          state="loading"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="error loading  icon"
        />
        <Button type="error" state="outline" onClick={() => 1} value="error outline no icon" />
        <Button
          type="error"
          state="outline"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="error outline  icon"
        />
        <Button type="success" state="normal" onClick={() => 1} value="success normal no icon" />
        <Button
          type="success"
          state="normal"
          onClick={() => 1}
          mode="light"
          value="success normal light border"
        />
        <Button
          type="success"
          state="normal"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="success normal  icon"
        />
        <Button type="success" state="loading" onClick={() => 1} value="success loading no icon" />
        <Button
          type="success"
          state="loading"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="success loading  icon"
        />
        <Button type="success" state="outline" onClick={() => 1} value="success outline no icon" />
        <Button
          type="success"
          state="outline"
          onClick={() => 1}
          icon={<SearchIcon />}
          value="success outline  icon"
        />
      </div>
    </div>
  );
};

export default DesktopView;
