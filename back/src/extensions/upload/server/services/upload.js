"use strict";

const { getService } = require("@strapi/plugin-upload/server/utils");

module.exports = ({ strapi }) => ({
  async uploadFileAndPersist(fileData, { user } = {}) {
    // PNG 파일일 경우 최적화 과정을 건너뛰도록 설정
    if (fileData.mime === "image/png") {
      // 최적화하지 않고 파일 데이터를 그대로 유지
      return strapi
        .plugin("upload")
        .service("upload")
        .uploadFileAndPersist(fileData, { user });
    }

    // 그 외의 경우, 기본 업로드 로직을 실행
    return getService("plugin::upload.upload").uploadFileAndPersist(fileData, {
      user,
    });
  },
});
