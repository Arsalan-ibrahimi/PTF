'use client'
import React from 'react'
import {Button, Drawer, Space, FloatButton} from 'antd'
import BurgerIcon from '@/img/icons/menu.svg'
import {CommentOutlined, InstagramOutlined,LinkedinFilled, SearchOutlined, GithubOutlined,CodepenOutlined,} from '@ant-design/icons'
import Search from 'antd/es/input/Search'
// import MyLogo from '@/img/icons/mylogo.svg'


export default function Navigation()
{
    const [open, setOpen] = React.useState(false);
    const [Floatopen, setFloatOpen] = React.useState(false);
    const [childrenDrawer, setChildrenDrawer] = React.useState(false);
    const onChange = () => {
        setFloatOpen(!Floatopen);
      };
    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const showChildrenDrawer = () => {
        setChildrenDrawer(true);
      };
      const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
      };
    return(
        <div  className=''>
      <div className='flex w-[100dvw] z-10  position-sticky top-1 border-b-[1px] justify-between items-center  bg-white text-black  nav-stick pl-2 '>
        
          <div className=' w-[33%] mobile-hide'>
            <ul  className='item-link flex gap-2 items-center'>
              <li className="nav-items link-style"><a href="">Home</a></li>
              <li className="nav-items link-style"><a href="">Projects</a></li>
              <li className="nav-items link-style"><a href="">About</a></li>
              <li className="nav-items link-style"><a href="">Contact</a></li>
            </ul>
          </div>
        <div className='w-[33%] mobile-full'>
          <div className="logowrap flex justify-center items-center gap-2 position-relative ">
          <p className='logo-name'>ARSALAN</p>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute left-[50%]'>
          <path d="M5.83725 18.3026L3.90002 14.9473L6.74301 10.0366L8.54958 13.166L19.2143 13.1602L16.1881 18.349L5.83725 18.3026Z" fill="#FFAD64"/>
          <path d="M21.1187 9.8285L19.1815 13.1838L13.5072 13.1771L15.314 10.0479L9.97668 0.814819L15.9833 0.841176L21.1187 9.8285Z" fill="#ADD4D3"/>
          <path d="M6.13575 0.796936H10.0102L12.8415 5.71441L9.22803 5.71423L3.9007 14.953L0.920166 9.73795L6.13575 0.796936Z" fill="#FB8351"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4826 0.0200427L10.471 0H5.67808L0 9.7339L3.89771 16.5538L3.90249 16.5455L5.37598 19.0976L16.6448 19.148L20.6021 12.3625H20.5758L22.0377 9.83051L16.447 0.0462083L10.4826 0.0200427ZM14.1902 6.51135H14.2201L11.4027 1.61804L15.5196 1.63609L20.1996 9.8264L18.7347 12.3636L14.896 12.3656L16.2344 10.0476L14.1902 6.51135ZM9.50655 1.59392L11.4277 4.91735L8.76775 4.91729L4.2139 12.8146L3.90328 13.3512L1.84056 9.742L6.59361 1.59392H9.50655ZM7.65947 10.03L9.68852 6.51123L12.3492 6.51135L14.3936 10.048L13.0548 12.3667L9.00969 12.3689L7.65947 10.03ZM4.82216 14.9505L5.5941 13.6119L6.74204 11.629L8.08963 13.9633L12.1342 13.9611L12.1276 13.9724L17.8142 13.9791L15.7316 17.55L6.2986 17.5078L4.82216 14.9505Z" fill="#333237"/>
          </svg>
          <p className='logo-name'>IBRAHIMI</p>
          </div>
        </div>
       <div  className=' links-menu flex gap-1 justify-end items-center px-2 text-black dark:text-white p-[0.8rem] px-2  w-[33%] mobile-full'>
          <Search placeholder="search" style={{ width: 200 }} />
       <Button type="primary" className='mobile-hide bg-[#24292e] hover:bg-[#2b3137]' icon={<GithubOutlined />} iconPosition='end'>
          My GitHub
          </Button>
          <Button type="default" className='mobile-hide border-[#24292e] hover:bg-[#2b3137]' icon={<CodepenOutlined />} iconPosition='end'>
          </Button>
        <svg onClick={showDrawer} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu text-black hide-laptop "><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
      </div>
      <div>
      <Drawer title="Arsalan's Portfolio" width={520} closable={false} onClose={onClose} open={open} 
      extra={
       
        <Button  onClick={onClose} className='border-round text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x text-black"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </Button>
                 
      }
      >

        <div className='links-menu text-black'>
            Home
        </div>

        <div className='links-menu text-black' onClick={showChildrenDrawer}>
            Projects
        </div>

        <div className='links-menu text-black' >
            About
        </div>

        <div className='links-menu text-black' >
            Contact Me
        </div>

      
        
        <Drawer

          title="Projects"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          extra={
            <Space>
              <Button onClick={onChildrenDrawerClose} className='border-round'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></Button>
            </Space>
          }
        >

        </Drawer>
      </Drawer>
      </div>




      <>
      <FloatButton.Group
        open={Floatopen}
        onClick={onChange}
        trigger="click"
        shape='square'
        
        badge={{
          count: "Socials",
          color: "black"
        }}
        style={{
          right: 24,
          color: "blue"
        }}
        icon={<CommentOutlined />}
      >
        <FloatButton
         icon={<InstagramOutlined />}
        />
        <FloatButton 
            icon={<LinkedinFilled />}
        />
      </FloatButton.Group>
     
    </>


        </div>
    )
}