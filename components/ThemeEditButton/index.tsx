'use client';

import Image from 'next/image';
import adIcon from '@/public/icons/ad.svg';
import doneOutlineIcon from '@/public/icons/done_outline.svg';
import downloadIcon from '@/public/icons/download.svg';
import stylusNoteIcons from '@/public/icons/stylus_note.svg';
import palette from '@/public/icons/palette.svg';
import cn from 'classnames';
import { useEditorMode } from '@/providers/editorMode';
import style from './style.module.css';

export default function ThemeEditButton() {
  const { editorMode, toggleEditorMode } = useEditorMode();
  const handleClickDropdown = (open: boolean) => () => toggleEditorMode(open);
  return (
    <div
      role='button'
      className={cn(style.dropdown, editorMode ? style.open : style.close)}
    >
      <button
        type='button'
        className={style.edit}
        onClick={handleClickDropdown(true)}
      >
        <Image priority src={stylusNoteIcons} alt='수정' />
      </button>
      <ul className={style['button-list']}>
        <li>
          <button type='button'>
            <Image priority src={downloadIcon} alt='다운로드' />
          </button>
        </li>
        <li>
          <button type='button'>
            <Image priority src={adIcon} alt='테마변경' />
          </button>
        </li>
        <li>
          <button type='button'>
            <Image priority src={palette} alt='컬러수정' />
          </button>
        </li>
      </ul>
      <button
        type='button'
        className={style.completed}
        onClick={handleClickDropdown(false)}
      >
        <Image priority src={doneOutlineIcon} alt='수정완료' />
      </button>
    </div>
  );
}
