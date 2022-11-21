import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { listdata } from "../../data/listdata";
function ListTable() {
  return (
    <>
      <div className="flex justify-between border-[black] ">
        <div>
          <h1 className="text-xl font-bold p-3">List</h1>
        </div>
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="search" />}
          />
        </div>
      </div>
      <hr className="mt-[1rem]" />
      <div className="flex justify-evenly pt-6 pb-6">
        <div>#</div>
        <div>User Profile</div>
        <div>Country</div>
        <div>Friends</div>
        <div>Followers</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      <hr />
      {listdata.map((item) => {
        return (
          <div className="pt-[1rem]">
            <div className="flex justify-evenly mt-2">
              <div>{item.id}</div>

              <div className="flex">
                <div>
                  <img className="w-[40px]" src={item.profilepic} alt="" />
                </div>
                <div className="">
                  <span>{item.mail}</span>
                  <div>{item.name}</div>
                </div>
              </div>
              <div>{item.country}</div>
              <div>{item.friends}</div>
              <div>{item.followers}</div>
              <div>{item.status}</div>
              <div>
                <div className="flex justify-center">
                  <span className="mt-[0.2rem] ">
                    <img src={item.chat} alt="" />
                  </span>{" "}
                  <span>
                    <img className="w-[30px]" src={item.block} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default ListTable;
