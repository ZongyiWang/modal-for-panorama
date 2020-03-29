import React from "react";
import "./styles.css";

export default function Detail() {
  return (
    <div class="container">
      <h2>Modal</h2>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#detailModal"
      >
        Open modal
      </button>
      <div class="modal fade show" id="detailModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Steering wheel</h4>
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div class="modal-body container">
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  <img
                    class="detailImage"
                    src="https://loremflickr.com/cache/resized/65535_49446817897_9ce434b2e8_c_800_240_g.jpg"
                    alt="random"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  this is description this is description this is description
                  this is description this is description this is description
                  this is description this is description this is description{" "}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
